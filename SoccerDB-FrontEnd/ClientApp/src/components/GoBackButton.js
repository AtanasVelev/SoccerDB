import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { getMatchDay } from '@babel/eslint-parser../redux/actions';

export default function GoBackButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '1vw' }}>
      <Button
        variant='contained'
        style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'whitesmoke' }}
        onClick={() => {
          dispatch(getMatchDay(null));
          navigate('/');
        }}
      >
        GO BACK
      </Button>
    </div>
  );
}
