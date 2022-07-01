import NewMeepupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    function addMeetuphandler(enteredMeetupData){
        console.log(enteredMeetupData);
    }

    return <NewMeepupForm onAddMeetup={addMeetuphandler} />;
}

export default NewMeetupPage;