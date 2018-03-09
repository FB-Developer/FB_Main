export class FBrequestresult {
    fbrequest: FBrequest;
    fbresult: FBresult;
}
export class FBrequest {
    academicyear: string;
    fname: string;
    fdept: string;
    degree: string;
    class: string;
    sem: string;
    dept: string;
    section: string;
    batch: string;
    subname: string;
}
export class FBresult {
    rating: string;
    score: number;
}
/*
{
    "academicyear": "2017-18",
     "batch": "A", 
     "dept": "Comp", 
       "sem": "5", 
       "class": "1",
        "degree": "BE",
         "sectionList": [
             { "section": "Theory",
                "subjectList":[{ 
                        "subname": "C Programming", 
                        "facultyList": [{
                             "fname": "PR",
                                "fdept": "Comp", 
                                "rating": "", 
                                "score": "" }]
                             }]
        }]
    }



*/