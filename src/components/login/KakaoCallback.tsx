import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { jwtTokenState } from '../../recoil/atoms';

export const KakaoCallback = () => {
  const navigate = useNavigate();
  const jwtToken = new URL(window.location.href).searchParams.get('jwt');
  const name = new URL(window.location.href).searchParams.get('name');
  console.log('jwtToken', jwtToken);
  console.log('name', name);

  const setJwtToken = useSetRecoilState(jwtTokenState);

  useEffect(() => {
    if (jwtToken) {
      localStorage.setItem('jwtToken', jwtToken);
      setJwtToken(true);
      //   navigate('/');
      navigate(window.location.origin + '/');
    } else {
      console.error('예기치 못한 에러가 발생했습니다.');
    }
  }, []);

  return <>잠시만 기다려주세요</>;
};
