let myTodos={
    day : 'Monday',
    meetings: 0,
    meetDone : 0,

    addMeeting : function(num){
        this.meetings = this.meetings + num
    },

    meetingDone : function(num){
        this.meetDone = this.meetDone + num
    },

    summary : function(){
        return `You have ${this.meetings} meetings today! meetsDone = ${this.meetDone}`

    }
}
myTodos.addMeeting(4)
myTodos.meetingDone(2)
console.log(myTodos.summary())