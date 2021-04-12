import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [DictionaryService],
})
export class PipesComponent implements OnInit {
  // data = [
  //   {
  //     id: 1,
  //     first_name: 'Bobina',
  //     last_name: 'Neilson',
  //     email: 'bneilson0@gnu.org',
  //     price: 31,
  //     percent: 9,
  //     date: '7/4/2020',
  //   },
  //   {
  //     id: 2,
  //     first_name: 'Roderigo',
  //     last_name: 'Bemment',
  //     email: 'rbemment1@hp.com',
  //     price: 87,
  //     percent: 29,
  //     date: '11/6/2020',
  //   },
  //   {
  //     id: 3,
  //     first_name: 'Haleigh',
  //     last_name: 'Lumox',
  //     email: 'hlumox2@networksolutions.com',
  //     price: 63,
  //     percent: 7,
  //     date: '2/3/2021',
  //   },
  //   {
  //     id: 4,
  //     first_name: 'Merla',
  //     last_name: 'Moyers',
  //     email: 'mmoyers3@wikia.com',
  //     price: 88,
  //     percent: 97,
  //     date: '5/1/2020',
  //   },
  //   {
  //     id: 5,
  //     first_name: 'Mirabelle',
  //     last_name: 'Tatford',
  //     email: 'mtatford4@time.com',
  //     price: 88,
  //     percent: 17,
  //     date: '6/6/2020',
  //   },
  //   {
  //     id: 6,
  //     first_name: 'Lila',
  //     last_name: 'Hartshorn',
  //     email: 'lhartshorn5@ocn.ne.jp',
  //     price: 32,
  //     percent: 94,
  //     date: '8/2/2020',
  //   },
  //   {
  //     id: 7,
  //     first_name: 'Katina',
  //     last_name: "O'Hollegan",
  //     email: 'kohollegan6@taobao.com',
  //     price: 46,
  //     percent: 65,
  //     date: '7/23/2020',
  //   },
  //   {
  //     id: 8,
  //     first_name: 'Tory',
  //     last_name: 'Butterly',
  //     email: 'tbutterly7@unc.edu',
  //     price: 6,
  //     percent: 84,
  //     date: '9/16/2020',
  //   },
  //   {
  //     id: 9,
  //     first_name: 'Reeva',
  //     last_name: 'Ivanaev',
  //     email: 'rivanaev8@china.com.cn',
  //     price: 87,
  //     percent: 95,
  //     date: '3/6/2021',
  //   },
  //   {
  //     id: 10,
  //     first_name: 'Fan',
  //     last_name: 'Camillo',
  //     email: 'fcamillo9@altervista.org',
  //     price: 33,
  //     percent: 70,
  //     date: '7/30/2020',
  //   },
  //   {
  //     id: 11,
  //     first_name: 'Huntley',
  //     last_name: 'Burchall',
  //     email: 'hburchalla@oracle.com',
  //     price: 100,
  //     percent: 96,
  //     date: '6/21/2020',
  //   },
  //   {
  //     id: 12,
  //     first_name: 'Katrina',
  //     last_name: 'Patridge',
  //     email: 'kpatridgeb@dailymail.co.uk',
  //     price: 94,
  //     percent: 83,
  //     date: '6/7/2020',
  //   },
  //   {
  //     id: 13,
  //     first_name: 'Ophelie',
  //     last_name: 'Tebald',
  //     email: 'otebaldc@diigo.com',
  //     price: 31,
  //     percent: 44,
  //     date: '5/27/2020',
  //   },
  //   {
  //     id: 14,
  //     first_name: 'Bee',
  //     last_name: 'Dagnan',
  //     email: 'bdagnand@tiny.cc',
  //     price: 23,
  //     percent: 97,
  //     date: '2/17/2021',
  //   },
  //   {
  //     id: 15,
  //     first_name: 'Yetta',
  //     last_name: 'Fossett',
  //     email: 'yfossette@springer.com',
  //     price: 19,
  //     percent: 40,
  //     date: '9/16/2020',
  //   },
  //   {
  //     id: 16,
  //     first_name: 'Davidson',
  //     last_name: 'Alasdair',
  //     email: 'dalasdairf@tinypic.com',
  //     price: 6,
  //     percent: 35,
  //     date: '7/1/2020',
  //   },
  //   {
  //     id: 17,
  //     first_name: 'Lotte',
  //     last_name: 'Baldacco',
  //     email: 'lbaldaccog@cisco.com',
  //     price: 22,
  //     percent: 48,
  //     date: '9/8/2020',
  //   },
  //   {
  //     id: 18,
  //     first_name: 'Shanie',
  //     last_name: 'Frankowski',
  //     email: 'sfrankowskih@huffingtonpost.com',
  //     price: 61,
  //     percent: 44,
  //     date: '7/30/2020',
  //   },
  //   {
  //     id: 19,
  //     first_name: 'Zelma',
  //     last_name: 'Kidney',
  //     email: 'zkidneyi@tuttocitta.it',
  //     price: 74,
  //     percent: 6,
  //     date: '12/11/2020',
  //   },
  //   {
  //     id: 20,
  //     first_name: 'Wilt',
  //     last_name: 'Pearmine',
  //     email: 'wpearminej@craigslist.org',
  //     price: 13,
  //     percent: 27,
  //     date: '11/2/2020',
  //   },
  // ];
  data: any[] = [];
  constructor(
    private dataTransferService: DataTransferService,
    private dictionaryService: DictionaryService
  ) {}

  ngOnInit(): void {
    this.data = this.dataTransferService.read();
    this.dataTransferService.createByKey('dataBackup', this.data);
    console.log(this.dictionaryService.data);
  }
}
