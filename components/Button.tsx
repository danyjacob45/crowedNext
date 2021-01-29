type Props = {
  icon?: string;
  click: Function;
};

const Button = ({ icon, click }: Props) => {
  const renderIcon = () => {
    switch (icon) {
      case "add":
        return (
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            className="mr-2"
          >
            <path
              d="M11.0312 5.09375H6.65625V0.71875C6.65625 0.609375 6.54688 0.5 6.4375 0.5H5.5625C5.42578 0.5 5.34375 0.609375 5.34375 0.71875V5.09375H0.96875C0.832031 5.09375 0.75 5.20312 0.75 5.3125V6.1875C0.75 6.32422 0.832031 6.40625 0.96875 6.40625H5.34375V10.7812C5.34375 10.918 5.42578 11 5.5625 11H6.4375C6.54688 11 6.65625 10.918 6.65625 10.7812V6.40625H11.0312C11.1406 6.40625 11.25 6.32422 11.25 6.1875V5.3125C11.25 5.20312 11.1406 5.09375 11.0312 5.09375Z"
              fill="white"
            />
          </svg>
        );
    }
  };

  return (
    <button type="button" onClick={() => click()} className="bt bt-main py-2">
      {icon ? renderIcon() : null}
      Əlavə et
    </button>
  );
};

export default Button;
