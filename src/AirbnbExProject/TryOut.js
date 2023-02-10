export default function App() {
    const firstName = "Potato"
    const lastName = "Poo"

    const date = new Date()
    const hours = date.getHours() % 12


    let timeOfDay

    if (hours < 12 ) {
        timeOfDay = "morning"
    }

    else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    }

    else {
        timeOfDay = "night"
    }


    return (
        <div>
            <h1>Hello {firstName} {lastName}!</h1>
            <h2>It's currently about {hours} o' clock</h2>
            <h3>Good {timeOfDay} </h3>
        </div>
    )
}
