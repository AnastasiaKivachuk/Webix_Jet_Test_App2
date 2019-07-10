import {
	JetView
} from "webix-jet";

export default class RecordsView extends JetView {
	config() {
		return {
			view: "template",
			template: "RecordsView"
		};
	}
}
