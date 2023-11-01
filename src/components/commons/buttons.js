import React from 'react';
import { StyledButton } from './style';

export const ThemedButton = ({ content, icon, onClick, styleClass, width }) => {
  return (
    <>
      <StyledButton onClick={onClick} width={width}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
          <p style={{ marginLeft: icon ? '6px' : 0 }}>{content}</p>
        </div>
      </StyledButton>
    </>
  );
};