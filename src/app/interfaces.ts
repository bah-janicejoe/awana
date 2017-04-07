export interface Year{
  id:number;
  begin:Date;
  end:Date;
  dayOfClasses:number;
  schedule:ClassDay[];
}

export interface Class{
  id:number;
  yearId:number;
  label:string;
  lesson:string[];
  roster:Student[];
}

export interface Student{
  id:number;
  name:string;
  phone:number;
  email:string;
  allergies:string,
  lessons:Lesson[];
  points:number;
  dailyChecks:Checkin[];
  classId:number;
  lastCompletedLesson:string;
}

export interface Checkin {
  date:Date;
  points:number;
}

export interface ClassDay{
  date:Date;
  pointValue:number;
  canceled:boolean;
}

export interface Lesson{
  label:string;
  student:boolean;
  parent:boolean;
  review:boolean;
}
