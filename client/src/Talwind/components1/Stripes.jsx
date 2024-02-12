import React from 'react';
import Striper from '../card/Striper';
import Marquee from 'react-fast-marquee';

function Stripes() {
  var data = [
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 48 },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 111 },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 48 },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 48 },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 48 },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 111 },
  ];

  return (
    <Marquee direction="left" speed={200} gradient={false}>
      <div className='flex  items-center z-21'>
        {data.map((elem, index) => (
          <Striper key={index} val={elem} />
        ))}
      </div>
    </Marquee>
  );
}

export default Stripes;
