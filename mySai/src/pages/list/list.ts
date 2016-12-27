@Component({
    templateUrl:'build/pages/list/list.html'
})
export class ListPage{
    selectedItem:any;
    icons:string[];
    items:Array<{title:string, note:string, icon:string}>;
    constructor(private navCtrl:NavController,navParams:NavParams){
        this.selectedItem=navParams.get('item');
        
    }
}