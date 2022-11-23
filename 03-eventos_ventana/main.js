const onMouseMove = (event) => {
    console.log(event.target.tagName);
}

window.addEventListener('mousemove', onMouseMove);