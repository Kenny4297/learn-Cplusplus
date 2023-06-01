import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ChallengeLoader() {
    const { challengeNumber } = useParams();

    const [Challenge, setChallenge] = useState<React.FC | null>(null);

    useEffect(() => {
        const loadChallenge = async () => {
            try {
                const { default: ImportedChallenge } = await import(
                    `./Challenge${challengeNumber}`
                );
                setChallenge(() => ImportedChallenge);
            } catch (error) {
                console.error(
                    `Couldn't load challenge ${challengeNumber}`,
                    error
                );
            }
        };

        loadChallenge();
    }, [challengeNumber]);

    if (Challenge === null) {
        return <div>Loading...</div>;
    }

    return <Challenge />;
}

export default ChallengeLoader;
