import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
	config() {
		let header = {
			type: "header",
			template: "#value#",
			localId: "header",
			css: "webix_header pageTitle"
		};

		let menu = {
			view: "menu",
			id: "top:menu",
			css: "app_menu",
			width: 180,
			layout: "y",
			select: true,
			template: "<span class='webix_icon #icon#'></span> #value# ",
			data: [
				{value: "Data", id: "DataView", icon: "mdi mdi-table-edit"},
				{value: "Edit", id: "EditView", icon: "mdi mdi-pen"},
				{value: "Records", id: "RecordsView", icon: "mdi mdi-file"},
				{value: "Settings", id: "SettingsView", icon: "mdi mdi-cogs"}
			],
			on: {
				onAfterSelect: (id) => {
					const value = this.$$("top:menu").getItem(id);
					this.$$("header").setValues(value);
				}
			}
		};

		return {
			rows: [
				header,
				{
					cols: [
						menu,
						{$subview: true}
					]
				}
			]
		};
	}

	init() {
		this.use(plugins.Menu, "top:menu");
	}
}
