import React from 'react';
import './App.css';

function App() {
  const valueOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectInput = [1, 2, 3, 4];
  const selectElemen = [];
  const loop = 10;

  const [value, setValue] = React.useState({});

  function handleChange(e) {
    const splitClass = e.target.className.split(' ');
    const mahasiswa = splitClass[0];
    const aspekPenilaian = splitClass[1];

    setValue(prev => {
      return {
        ...prev,
        [aspekPenilaian]: {
          ...prev[aspekPenilaian],
          [mahasiswa]: +e.target.value,
        },
      };
    });
  }

  function handleClick(e) {
    document.getElementById('myText').innerHTML = JSON.stringify(
      value,
      null,
      4
    );
  }

  for (let i = 1; i <= loop; i++) {
    selectElemen.push(
      <tr key={i}>
        <td>Mahasiswa {i}</td>
        {selectInput.map((select, index1) => {
          return (
            <td key={index1}>
              <select
                style={{ width: '100px' }}
                onChange={handleChange}
                className={`mahasiswa_${i} aspek_penilaian_${select}`}
              >
                {valueOption.map((val, index2) => {
                  return (
                    <option value={val} key={index2}>
                      {val}
                    </option>
                  );
                })}
              </select>
            </td>
          );
        })}
      </tr>
    );
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}
      >
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Aspek Penilaian 1</th>
              <th>Aspek Penilaian 2</th>
              <th>Aspek Penilaian 3</th>
              <th>Aspek Penilaian 4</th>
            </tr>
          </thead>
          <tbody>{selectElemen}</tbody>
        </table>
      </div>

      <center>
        <button type="button" onClick={handleClick}>
          Simpan
        </button>
        <pre
          id="myText"
          style={{
            display: 'flex',
            textAlign: 'left',
            justifyContent: 'center',
          }}
        ></pre>
      </center>
    </>
  );
}

export default App;
