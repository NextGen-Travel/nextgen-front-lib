import { pick, Event } from 'power-helper'

type Channels = {
    dataavailable: {
        event: BlobEvent
    }
}

export class Camera extends Event<Channels> {
    private canvas = document.createElement('canvas')
    private video?: HTMLVideoElement
    private stream?: MediaStream
    private mediaRecorder?: MediaRecorder
    static stopAndRemoveTracks(stream: MediaStream): void {
        stream.getTracks().forEach(track => track.stop())
        stream.getAudioTracks().forEach(track => stream.removeTrack(track))
        stream.getVideoTracks().forEach(track => stream.removeTrack(track))
    }

    /**
     * 如果透過 navigator.permissions.query({ name: 'camera' }) 驗證會出現 Firefox 不支援的問題。
     */

    static async requestPermission() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            })
            Camera.stopAndRemoveTracks(stream)
            return true
        } catch (error) {
            return false
        }
    }

    async install(video: HTMLVideoElement, options?: {
        useRearLens?: boolean
    }) {
        const o: Required<typeof options> = {
            useRearLens: pick.ifEmpty(options?.useRearLens, false)
        }
        this.video = video
        this.stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: {
                width: video.width,
                height: video.height,
                facingMode: o.useRearLens === false ? undefined : {
                    exact: 'environment'
                }
            }
        })
        this.mediaRecorder = new MediaRecorder(this.stream, {
            mimeType: 'video/webm;'
        })
        this.mediaRecorder.addEventListener('dataavailable', event => {
            this.emit('dataavailable', { event })
        })
    }

    reload() {
        this.close()
        if (this.video) {
            this.install(this.video)
        }
    }

    play() {
        return new Promise(resolve => {
            if (this.mediaRecorder) {
                this.mediaRecorder.start(1000 / 24)
            }
            if (this.video) {
                this.video.srcObject = this.stream as any
                this.video.onloadedmetadata = () => {
                    if (this.mediaRecorder && this.video) {
                        this.video.play()
                        resolve(null)
                    }
                }
            }
        })
    }

    /** 獲得一個 base64 截圖 */

    toImage() {
        if (this.video) {
            this.canvas.width = this.video.width
            this.canvas.height = this.video.height
            let context = this.canvas.getContext('2d')
            if (context) {
                context.clearRect(0, 0, this.canvas.width, this.canvas.height)
                context.drawImage(this.video, 0, 0)
            }
        }
        return this.canvas.toDataURL()
    }

    close() {
        if (this.stream) {
            Camera.stopAndRemoveTracks(this.stream)
        }
        if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
            this.mediaRecorder.stop()
        }
    }
}