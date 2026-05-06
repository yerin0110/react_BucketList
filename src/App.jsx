import { useState } from "react";
import BucketList from './components/BucketList';
import './App.css';

function App(){
  const [countryInput, setCountryInput]=useState('');
  const [regionInput, setRegionInput]=useState('');
  const [activityInput, setActivityInput]=useState('');

  const [bucketList, setBucketList]=useState([
    {
      id: 1,
      country: '영국',
      region: '런던',
      activity: '영국 박물관(대영 박물관) 관람하기'
    },
    {
      id: 2,
      country: '볼리비아',
      region: '우유니',
      activity: '우유니 소금 사막 관광하기'
    },
    {
      id: 3,
      country: '아이슬란드',
      region: '레이캬비크',
      activity: '오로라 보기'
    }
  ])

  const addBucket=()=>{
    if (countryInput === '' || regionInput === '' || activityInput === '') return;

    const newBucket = {
      id: Date.now(),
      country: countryInput,
      region: regionInput,
      activity: activityInput,
      isDone: false
    }

    setBucketList([...bucketList, newBucket]);

    setCountryInput('');
    setRegionInput('');
    setActivityInput('');
  }

  const delBucket=(targetId)=>{
    const newBucketList=bucketList.filter((bucket)=>bucket.id !== targetId);
    setBucketList(newBucketList);
  }

  const toggleCom=(targetId)=>{
    const newBucketList=bucketList.map((bucket)=>{
      if(bucket.id===targetId){
        return{...bucket, isDone: !bucket.isDone}
      }
      else{
        return bucket;
      }
    });
    setBucketList(newBucketList);
  }

  return(
    <div className="app_wrap">
      <h2>🛫 나의 세계여행 버킷리스트</h2>
      <div className="input_box">
        <input type="text"
          placeholder="나라 (예: 일본)"
          value={countryInput}
          onChange={(e)=> setCountryInput(e.target.value)}
        />
        <input type="text"
          placeholder="지역 (예: 후쿠오카)"
          value={regionInput}
          onChange={(e)=> setRegionInput(e.target.value)}
        />
        <input type="text"
          placeholder="가장 하고 싶은 일은?"
          value={activityInput}
          onChange={(e)=> setActivityInput(e.target.value)}
        />
        <button onClick={addBucket}>추가 🎒</button>
      </div>
      <div className="bucket_board">
        {bucketList.map((list)=>(
          <BucketList
            key={list.id}
            data={list}
            onDelete={delBucket}
            onToggle={toggleCom}
          />
        ))}
      </div>
    </div>
  )
}

export default App;