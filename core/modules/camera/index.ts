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
        record?: boolean
        useRearLens?: boolean
    }) {
        const o: Required<typeof options> = {
            record: pick.ifEmpty(options?.record, false),
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
        // 查詢支援類型
        if (o.record) {
            let mimeTypes = [
                'video/webm',
                'video/mp4,',
                'video/quicktime',
                'video/x-m4v',
                'video/3gpp',
                'video/3gpp2'
            ]
            let mimeType: any = undefined
            for (let type of mimeTypes) {
                if (MediaRecorder.isTypeSupported(type)) {
                    mimeType = type
                    break
                }
            }
            this.mediaRecorder = new MediaRecorder(this.stream, {
                mimeType
            })
            this.mediaRecorder.addEventListener('dataavailable', event => {
                this.emit('dataavailable', { event })
            })
        }
    }

    async reload() {
        this.close()
        if (this.video) {
            await this.install(this.video)
        }
    }

    play() {
        if (this.mediaRecorder) {
            this.mediaRecorder.start(1000 / 24)
        }
        if (this.video) {
            this.video.srcObject = this.stream as any
            this.video.play()
        }
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
