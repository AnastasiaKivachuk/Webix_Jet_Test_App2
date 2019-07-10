import {
	JetView
} from "webix-jet";

export default class EditView extends JetView {
	config() {
		return {
			view: "template",
			template: "EditView"
		};
	}
}
