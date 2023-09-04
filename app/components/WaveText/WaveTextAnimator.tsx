import '../WaveText/WaveText.css'

interface WaveTextAnimatorProps {
    text: string;
}

const WaveTextAnimator = (props: WaveTextAnimatorProps) => {
    const { text } = props;

    const getTextNodes = () => {
        let textNodes: React.JSX.Element[] = [];
        for (let i = 0; i < text.length; i++) {
            let symbol = text[i];
            if (symbol == ' ') symbol = '\u00A0'; // replace white space with non breakable one

            textNodes.push(<span style={{ animationDelay: `${i / 10}s` }}>{symbol}</span>)
        }
        return textNodes;
    }

    const textNodes = getTextNodes();
    return <div className='wave-text'>
        {textNodes}
    </div>
}

export default WaveTextAnimator;
