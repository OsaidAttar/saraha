import bcrypt from'bcrypt';
export const hash=(plainText,saltRound=process.env.SaltRound)=>{
const hachResult=bcrypt.hashSync(plainText,parseInt(saltRound))
return hachResult
}
export const compare=(password,hashValue)=>{
    const CompareResult=bcrypt.compareSync(password,hashValue)
    return CompareResult
    }