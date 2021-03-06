import { BaseListener } from "./BaseListener";
/**
 * Base class for spatializers that uses WebAudio's AudioListener
 **/
export declare abstract class BaseWebAudioListener extends BaseListener {
    protected listener: AudioListener;
    /**
     * Creates a new spatializer that uses WebAudio's PannerNode.
     */
    constructor(audioContext: BaseAudioContext);
    dispose(): void;
}
