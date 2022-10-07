const goToHref = (href) => {
    let newWindow = window.open();
    newWindow.opener = null;
    newWindow.location = href;
}

export default goToHref;