import styles from "./icon.module.scss";

import { icons } from "../../lib/icon";
import { IconNames } from "../../types/icon";

interface IconProps {
  icon: IconNames;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <span
      className="icon"
      data-icon="true"
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
    />
  );
};

export default Icon;
