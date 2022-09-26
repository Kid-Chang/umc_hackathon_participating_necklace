import React, { useEffect } from 'react';
import AppContent from '../components/default/AppContent';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DefaultLayout = () => {
  const navigate = useNavigate();

  // Redux 값 불러오기

  return (
    <>
      <IndexStyle>
        <AppContent />
      </IndexStyle>
    </>
  );
};

export default DefaultLayout;

const IndexStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;