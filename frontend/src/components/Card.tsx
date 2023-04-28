import styled from '@emotion/styled';
import React from 'react';

type PropType = {
  headerText: string;
  children: any;
  actionLabel?: string;
  handleAction?: () => void;
  image?: string;
  imagePosition?: string;
  handleClickOnCard?: () => void;
};

const StyledCard = styled('div')({
  padding: '16px',
  borderRadius: '8px',
  width: '100%',
  boxShadow: '-60px 0px 100px -90px #000000, 60px 0px 100px -90px #000000'
});

const StyledHeader = styled('div')({
  fontSize: '3.75rem',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  lineHeight: 1.2,
  letterSpacing: '-0.00833em'
});

export const Card = ({
  headerText,
  children,
  actionLabel,
  handleAction,
  image,
  imagePosition = 'center',
  handleClickOnCard
}: PropType) => {
  return (
    <StyledCard onClick={handleClickOnCard}>
      {image && imagePosition === 'top' && <img src={image} />}
      {!!headerText && <StyledHeader>{headerText}</StyledHeader>}
      {!!actionLabel && (
        <div>{actionLabel && <button onClick={handleAction}>{actionLabel}</button>}</div>
      )}
      {image && imagePosition === 'center' && <img src={image} />}
      <div>{children}</div>
      {image && imagePosition === 'bottom' && <img src={image} />}
    </StyledCard>
  );
};
