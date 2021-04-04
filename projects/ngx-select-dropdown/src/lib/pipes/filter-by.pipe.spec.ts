import { FilterByPipe } from './filter-by.pipe';
const testData = [
   {
      _id: '5ab9c81febf774900a0ff849',
      index: 0,
      guid: '3ed3d5d4-7b27-4091-a207-427c196a76fc',
      balance: '$1,367.97',
      age: 28,
      eyeColor: 'brown',
      firstName: 'Bertie',
      lastName: 'Marks',
      company: 'ISOTRONIC',
      email: 'bertie.marks@isotronic.info',
      phone: '+1 (817) 557-2705',
      address: '853 Cook Street, Deercroft, Northern Mariana Islands, 1714',
      about: 'Quis aliqua et mollit mollit ad velit ut deserunt tempor sint sunt. Enim occaecat consectetur cillum ipsum cupidatat. Labore occaecat qui tempor veniam laborum deserunt. Elit magna commodo laborum voluptate incididunt ad. Sit elit enim culpa pariatur proident fugiat quis eu magna.'
   },
   {
      _id: '5ab9c820de24c4ea5ff96665',
      index: 1,
      guid: 'c40f62a2-7294-4a75-a805-cb5957b55727',
      balance: '$2,063.42',
      age: 24,
      eyeColor: 'brown',
      firstName: 'Ramona',
      lastName: 'Walter',
      company: 'SOPRANO',
      email: 'ramona.walter@soprano.com',
      phone: '+1 (903) 477-2993',
      address: '676 Hendrix Street, Groveville, Marshall Islands, 9712',
      about: 'Sint quis cillum ad Lorem in nulla ipsum sunt ut ad quis ad ex. Anim do cillum culpa commodo duis ad nulla fugiat labore fugiat irure aute est elit. Mollit nisi voluptate anim consequat deserunt ullamco. Qui ex laboris sit dolor officia fugiat elit eu commodo nulla aute. Voluptate laborum labore ut tempor consectetur ipsum commodo do irure culpa officia. Nostrud cillum eu ex dolore adipisicing occaecat id nulla dolore.'
   },
   {
      _id: '5ab9c820d668abc6eb572961',
      index: 2,
      guid: '6c858720-d0c2-4fba-8316-3a974a2c5ccc',
      balance: '$3,890.59',
      age: 31,
      eyeColor: 'brown',
      firstName: 'Holmes',
      lastName: 'Ratliff',
      company: 'ACLIMA',
      email: 'holmes.ratliff@aclima.co.uk',
      phone: '+1 (977) 541-2880',
      address: '736 Dikeman Street, Vallonia, Wyoming, 1370',
      about: 'Reprehenderit et sint eu sunt occaecat sint dolore minim aliqua aute enim incididunt. Labore officia qui proident esse cupidatat sint deserunt. Velit qui incididunt ullamco ullamco qui. Nostrud in sit laboris sit pariatur esse ea dolore elit enim.'
   },
   {
      _id: '5ab9c820ad13b4f8707133e7',
      index: 3,
      guid: '29042a8d-f992-4ff7-8609-7cf1cb44ea0c',
      balance: '$1,743.95',
      age: 28,
      eyeColor: 'blue',
      firstName: 'Lara',
      lastName: 'Cox',
      company: 'CENTREE',
      email: 'lara.cox@centree.biz',
      phone: '+1 (894) 505-3882',
      address: '482 Sackman Street, Goodville, Kentucky, 3683',
      about: 'Mollit anim nostrud duis anim mollit reprehenderit ad velit mollit anim. Velit veniam reprehenderit minim fugiat. Aliqua est anim esse exercitation deserunt magna ad dolor minim labore. Occaecat deserunt elit occaecat irure eiusmod sit nisi ad in mollit in cupidatat. Ex consequat dolore amet laborum qui.'
   },
   {
      _id: '5ab9c8203b395f39aa34997d',
      index: 4,
      guid: '72e39252-f7e7-49d0-9e3b-03ae8261bfeb',
      balance: '$2,630.52',
      age: 33,
      eyeColor: 'blue',
      firstName: 'Toni',
      lastName: 'Simpson',
      company: 'GOKO',
      email: 'toni.simpson@goko.io',
      phone: '+1 (976) 583-3167',
      address: '574 Prescott Place, Lowgap, Rhode Island, 3696',
      about: 'Nisi et magna voluptate aute dolor minim commodo laboris nisi est. Reprehenderit sunt occaecat deserunt ea fugiat dolor dolor exercitation ut. Laboris laboris amet quis consectetur eiusmod. Excepteur qui ut et magna tempor magna. Nulla adipisicing commodo mollit velit velit nisi consequat laborum voluptate.'
   },
   {
      _id: '5ab9c820c181d1a8468a64ae',
      index: 5,
      guid: 'be7b9b92-d3c8-4175-a57d-d918304e410f',
      balance: '$1,601.57',
      age: 26,
      eyeColor: 'brown',
      firstName: 'Megan',
      lastName: 'Barr',
      company: 'GRAINSPOT',
      email: 'megan.barr@grainspot.tv',
      phone: '+1 (831) 576-3439',
      address: '707 Dewey Place, Gerber, West Virginia, 794',
      about: 'Officia mollit dolore occaecat occaecat. Voluptate adipisicing ad sit aliquip laborum proident aliquip nulla incididunt. Aute laboris elit nisi aute exercitation esse sit velit enim duis. Sunt fugiat ad non qui dolor Lorem.'
   }
];
const result = [
   {
      _id: '5ab9c81febf774900a0ff849',
      index: 0,
      guid: '3ed3d5d4-7b27-4091-a207-427c196a76fc',
      balance: '$1,367.97',
      age: 28,
      eyeColor: 'brown',
      firstName: 'Bertie',
      lastName: 'Marks',
      company: 'ISOTRONIC',
      email: 'bertie.marks@isotronic.info',
      phone: '+1 (817) 557-2705',
      address: '853 Cook Street, Deercroft, Northern Mariana Islands, 1714',
      about: 'Quis aliqua et mollit mollit ad velit ut deserunt tempor sint sunt. Enim occaecat consectetur cillum ipsum cupidatat. Labore occaecat qui tempor veniam laborum deserunt. Elit magna commodo laborum voluptate incididunt ad. Sit elit enim culpa pariatur proident fugiat quis eu magna.'
   },
   {
      _id: '5ab9c820c181d1a8468a64ae',
      index: 5,
      guid: 'be7b9b92-d3c8-4175-a57d-d918304e410f',
      balance: '$1,601.57',
      age: 26,
      eyeColor: 'brown',
      firstName: 'Megan',
      lastName: 'Barr',
      company: 'GRAINSPOT',
      email: 'megan.barr@grainspot.tv',
      phone: '+1 (831) 576-3439',
      address: '707 Dewey Place, Gerber, West Virginia, 794',
      about: 'Officia mollit dolore occaecat occaecat. Voluptate adipisicing ad sit aliquip laborum proident aliquip nulla incididunt. Aute laboris elit nisi aute exercitation esse sit velit enim duis. Sunt fugiat ad non qui dolor Lorem.'
   }
];
describe('FilterByPipe', () => {
   it('create an instance', () => {
      const pipe = new FilterByPipe();
      expect(pipe).toBeTruthy();
   });

   it('should return the value when not array', () => {
      const pipe = new FilterByPipe();
      expect(pipe.transform('test' as any)).toEqual('test' as any);
   });

   it('should return the filtered array of objects', () => {
      const pipe = new FilterByPipe();
      expect(pipe.transform(testData, 'B')).toEqual([...testData]);
   });

   it('should return the filtered array of objects when no item matches', () => {
      const pipe = new FilterByPipe();
      expect(pipe.transform(testData, 'xxxxxxx')).toEqual([]);
   });

   it('should return the filtered array of objects', () => {
      const pipe = new FilterByPipe();
      expect(pipe.transform(testData, 'B', 'firstName')).toEqual([result[0]]);
   });

   it('should return the filtered array of objects', () => {
      const pipe = new FilterByPipe();
      const arr = ['star', 'galaxy', 'sun', 'moon', 'earth'];
      expect(pipe.transform(arr, 'ar')).toEqual(['star', 'earth']);
   });
});
