import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { ServSkillsService } from 'src/app/service/serv-skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  skill : Skills = null;

  constructor(private servSkills: ServSkillsService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.servSkills.detail(id).subscribe(
        data => {
          this.skill = data;
        }, err =>{
          alert("Error al modificar skill");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.servSkills.update(id, this.skill).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar skill");
          this.router.navigate(['']);
        }
      )
    }

}
