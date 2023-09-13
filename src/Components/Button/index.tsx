// libs
import { FC } from 'react';

// styled-components
import { ButtonWrapper } from './Button.styled';
type ButtonProps = {
  name: string;
  icon: any;
  onClick: any;
};

const Button: FC<ButtonProps> = ({ name, icon, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick} data-testid="button-icon">
      <span>
        {icon}
        {name}
      </span>
      <span></span>
    </ButtonWrapper>
  );
};

export default Button;
