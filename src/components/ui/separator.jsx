const Separator = ({ orientation = "horizontal" }) => {
  const styles = {
    horizontal: "h-[1px] w-full bg-gray-200",
    vertical: "h-full w-[1px] bg-gray-200"
  };

  return (
    <div
      className={styles[orientation]}
      role="separator"
      aria-orientation={orientation}
    />
  );
};

export { Separator }; 