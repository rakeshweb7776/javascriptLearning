export function event_01() {

    document.querySelector('#app').innerHTML = `
    <ul id="images">
        <li>
            <img src="https://picsum.photos/100/100?random=1" alt="Image 1">
            <span>Item 1</span>
        </li>
        <li>
            <img src="https://picsum.photos/100/100?random=2" alt="Image 2">
            <span>Item 2</span>
        </li>
        <li>
            <img src="https://picsum.photos/100/100?random=3" alt="Image 3" id="third">
            <span>Item 3</span>
        </li>
        <li>
            <img src="https://picsum.photos/100/100?random=4" alt="Image 4">
            <span>Item 4</span>
        </li>
        <li>
            <img src="https://picsum.photos/100/100?random=5" alt="Image 5">
            <span>Item 5</span>
        </li>
        <li>
            <a href="https://www.google.com/" id="linkTest">Google.com</a>
        </li>
    </ul>
`;

    // if We pass false it is Bubbliing Events

    document.querySelector('#images').addEventListener('click', function (e) {
        // console.log("click on ul");
    }, false);

    document.querySelector('#third').addEventListener('click', function (e) {
        // console.log("click on third img");
    }, false);


    // if We pass true it is Capturing Events
    document.querySelector('#images').addEventListener('click', function (e) {
        // console.log("click on ul");
    }, true);

    document.querySelector('#third').addEventListener('click', function (e) {
        // console.log("click on third img");
    }, true);



    document.querySelector('#images').addEventListener('click', function (e) {
        const removeEl = e.target.parentNode;
        let eleType = e.target.tagName

        if (eleType === "IMG") {
            removeEl.remove();
        }
    }, false);


    document.querySelector('#linkTest').addEventListener('click', function (e) {  
        // Use it for redirection stop
        e.preventDefault()

        // Using it for stop bublling events
        e.stopPropagation()
    }, false);



}