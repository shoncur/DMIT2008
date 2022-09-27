/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

let newTopicForm = document.querySelector(".new-topic-form")
let topicList = document.querySelector(".topics-list")

const addTopicToPage = (topicName, topicListElement) => {
    let newTopicElement = `<li class="list-group-item">
        ${topicName}
    </li>`
    topicListElement.innerHTML += newTopicElement
}

newTopicForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let topicInput = event.target.elements["new-topic"]
    console.log(topicInput)
    let newTopic = topicInput.value

    if (newTopic === "") {
        // we're going to add is-invalid
        topicInput.classList.add("is-invalid")
        return
    } else {
        // remove that class above
        topicInput.classList.remove("is-invalid")
    }
    addTopicToPage(newTopic, topicList) // call the function
    topicInput.value = ""
})