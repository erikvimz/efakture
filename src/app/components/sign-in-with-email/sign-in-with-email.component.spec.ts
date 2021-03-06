import {ComponentFixture, TestBed} from '@angular/core/testing'
import {SignInWithEmailComponent} from './sign-in-with-email.component'

describe('SignInWithEmailComponent', () => {
  let component: SignInWithEmailComponent
  let fixture: ComponentFixture<SignInWithEmailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInWithEmailComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInWithEmailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
