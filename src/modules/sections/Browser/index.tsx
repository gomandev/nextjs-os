import {
  FC, useCallback, useEffect, useState,
} from 'react';
import styled from 'styled-components';

interface IProps {
  browser: (boolean) => void;
}

export const Browser: FC<IProps> = ({ browser }: IProps) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');

  const toggleExpand = () => {
    setExpand(!expand);
  };
  const onKeyUp = async (event) => {
    if (event.charCode === 13) {
      window.open(keyword);
    }
  };
  const handleSearchValue = (e: any) => {
    const keyword = e.target.value;
    setKeyword(keyword);
  };
  let def = 2;

  const z = def++;

  return (
    <Wrap
      style={{
        top: '20%',
        left: '30%',
        width: `${expand ? '100%' : '700px'}`,
        height: `${expand ? '100vh' : '500px'}`,
        position: `${expand ? 'relative' : 'absolute'}`,
        zIndex: focus ? z : def,
      }}
      onFocus={() => setFocus(true)}
    >
      <Row>
        <div className="flex">
          <span style={{ background: '#ED594A' }} />
          <span style={{ background: '#FDD800' }} />
          <span style={{ background: '#5AC05A' }} />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => handleSearchValue(e)}
            onKeyPress={onKeyUp}
          />
        </div>
        <div className="flex">
          <i onClick={() => browser(false)} className="fas fa-times mr-4" />
          <i onClick={() => toggleExpand()} className="fas fa-square" />
        </div>
      </Row>
    </Wrap>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  div {
    span {
      margin-top: 4px;
      height: 12px;
      width: 12px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      margin-right: 0.5em;
    }
    input {
      width: 100%;
      border-radius: 3px;
      border: none;
      background-color: white;
      margin-top: -8px;
      height: 25px;
      color: #666;
      padding: 5px;
      &:focus {
        outline: 0 !important;
      }
    }
    i {
      cursor: pointer;
      color: ${({ theme }) => theme.accent};
    }
  }
`;
const Wrap = styled.div`
  background: ${({ theme }) => theme.accent};

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
