//1) Import


//2) Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';



//3) Action Creators

function startTimer(){
  return{
    type:START_TIMER
  };
}

function restartTimer(){
  return{
    type:RESTART_TIMER
  };
}

function addSecond(){
  return{
    type:ADD_SECOND
  };
}


//4) Reducer : reducer always includes state

const TIME_DURATION = 1500;

const initialState={
  isPlaying:false,
  elapsedTime:0,
  timeDuration = TIME_DURATION
}

function reducer(state=initialState, action){
  //by default, if there is action, reducer will automatically execute 'action' (which are START_TIMER, RESTART_TIMER, ADD_SECOND)
  switch(action.type){
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
  }
}


//5) Reducer functions

function applyStartTimer(state){
  return{
    ...state,
    isPlaying:true
  }
}

function applyRestartTimer(state){
  return{
    ...state,
    isPlaying:false,
    elapsedTime:0
  }
}

function applyAddSecond(state){
  if(state.elapsedTime < TIME_DURATION){
    return{
      ...state,
      elapsedTime : state.elapsedTime+1
    }
  }else{
    return{
      ...state,
      isPlaying:false
    }
  }
}



//6) Export Action creatros

const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};



//7) Export Reducer
export default reducer;
