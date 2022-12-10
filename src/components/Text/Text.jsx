const Text = ({
  size,
  sm_size,
  div_style,
  text_style,
  gradient,
  tag,
  position,
  children,
}) => {
  return (
    <div
      className={`${position && `flex justify-${position}`} ${
        div_style && div_style
      }`}
    >
      <h1
        className={`md:text-${size} text-${sm_size} font-bold w-max ${
          text_style && text_style
        } ${
          tag && "bg-purple-500 text-white dark:bg-purple-800 rounded-xl p-1"
        } ${
          gradient &&
          `text-transparent bg-clip-text bg-gradient-to-r ${gradient}`
        }`}
      >
        {children}
      </h1>
    </div>
  );
};

export default Text;
