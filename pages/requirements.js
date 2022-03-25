import React, { useEffect, useState } from 'react';
import RequirementCard from '../components/RequirementCard';
import Loader from '../components/Loader';
import { Plock } from 'react-plock';
import Header from '../components/Header';
import Example from '../components/Dashboard';

const data = [1, 2, 3, 4, 5];

const breakpoints = [
  { size: 640, columns: 1 },
  { size: 768, columns: 2 },
  { size: 1024, columns: 4 },
];

const bgColor = [
  '#F38181',
  '#FCE38A',
  '#EAFFD0',
  '#95E1D3',
  '#8785A2',
  '#FC5185',
  '#AA96DA',
  '#61C0BF',
  '#30E3CA',
  '#A6B1E1',
  '#E23E57',
  '#FF9999',
  '#F07B3F',
  '#769FCD',
  '#FF9A00',
  '#62D2A2',
  '#3490DE',
  '#6639A6',
];

const Requirements = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      'https://college-requirement-form.herokuapp.com/user'
    );
    const data = await response.json();

    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data ? (
    // <div className="grid grid-cols-1 bg-gray-100 md:grid-cols-2 lg:grid-cols-3  place-content-center px-7 py-10">
    <div className="p-6">
      <Header />
      <Example />
      <Plock nColumns={breakpoints} gap={20} debounce={100}>
        {data.map((val, index) => {
          let bg = bgColor[index % 18];
          return <RequirementCard data={val} key={index} bg={bg} />;
        })}
      </Plock>
    </div>
  ) : (
    // </div>
    <div className="absolute h-screen w-screen bg-white flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default Requirements;
