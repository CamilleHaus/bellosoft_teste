interface IButton {
    children: React.ReactNode;
    type: "submit" | "reset" | "button";
}

const Button = ({children, type}: IButton) => {
    return (
        <button type={type}
        className="bg-primary py-4 rounded-lg text-white">{children}</button>
    )
};

export default Button;