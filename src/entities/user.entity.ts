import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('user')
class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public uuid: string

  @Column({ name: 'email', unique: true })
  public email: string

  @Column({ name: 'username' })
  public username: string

  @Column({ name: 'surname', nullable: true })
  public surname: string

  @Column({ name: 'patronymic', nullable: true })
  public patronymic: string

  @Column({ name: 'code' })
  public code: number

  @Column({ name: 'is_verify', default: false })
  public isVerify: boolean

  @Column({ name: 'password' })
  public password: string

  @Column({ name: 'access_token', nullable: true })
  public accessToken: string

  @Column({ name: 'is_two_factor_auth', default: false })
  public isTwoFactorAuth: boolean

  @CreateDateColumn( { name: 'created_at' })
  public createdAt: string

  @UpdateDateColumn( { name: 'updated_at' })
  public updatedAt: string
}

export default UserEntity