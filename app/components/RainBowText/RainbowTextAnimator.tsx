import { MouseEventHandler } from 'react';
import './Rainbow.css'

interface RainbowTextAnimatorProps {
    text: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const RainbowTextAnimator = (props: RainbowTextAnimatorProps) => {
    const { text, onClick } = props;

    const getTextNodes = () => {
        let textNodes: React.JSX.Element[] = [];
        for (let i = 0; i < text.length; i++) {
            let symbol = text[i];
            if (symbol == ' ') symbol = '\u00A0'; // replace white space with non breakable one

            textNodes.push(<span key={`${symbol}_${i}`} style={{ animationDelay: `${i / 10}s` }}>{symbol}</span>)
        }
        return textNodes;
    }

    const textNodes = getTextNodes();
    return <div className='rainbow-text' onClick={onClick}>
        {textNodes}
    </div>
}

export default RainbowTextAnimator;
