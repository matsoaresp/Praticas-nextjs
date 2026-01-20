type ActionButtonProps = {
        text: string
        onClick: () => void

    }

export default function ActionButton({text, onClick}: ActionButtonProps) {

    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )

}