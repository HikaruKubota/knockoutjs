window.onload = function() {
    var viewModel = {
        myMessage: ko.observable()
    }
    viewModel.myMessage("Hello!!!!!!")
    ko.applyBindings(viewModel)
};
