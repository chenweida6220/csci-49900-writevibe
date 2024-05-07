import React, { useRef, useEffect } from 'react';

const Audio = ({ keystrokeSfx, sfxVolume, bgAudio, bgVolume }) => {
    const audioRef = useRef(null);
    const bgAudioRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (audioRef.current) {
                const clonedAudio = audioRef.current.cloneNode(true);
                clonedAudio.volume = sfxVolume; // Set volume on the cloned node
                clonedAudio.play();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [sfxVolume, keystrokeSfx]); // Add keystrokeSfx to the dependency array if you want the effect to re-run when sound changes

    useEffect(() => {
        if (bgAudioRef.current) {
            bgAudioRef.current.volume = bgVolume;
        }
    }, [bgVolume]);

    return (
        <>
            <audio ref={audioRef} src={keystrokeSfx} preload="auto" />
            <audio ref={bgAudioRef} src={bgAudio} autoPlay loop preload="auto" />
        </>
    );
};

export default Audio;
