declare class UserEntity {
    uuid: string;
    email: string;
    username: string;
    surname: string;
    patronymic: string;
    code: number;
    isVerify: boolean;
    password: string;
    accessToken: string;
    isTwoFactorAuth: boolean;
    createdAt: string;
    updatedAt: string;
}
export default UserEntity;
