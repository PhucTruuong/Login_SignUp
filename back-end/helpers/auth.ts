import bcrypt from "bcrypt";

export const hashPassword = (password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (error, salt) => {
            if (error) {
                reject(error);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
};

export const comparePassword = (password: string, hashed: string): Promise<boolean> => {
    return bcrypt.compare(password, hashed);
};