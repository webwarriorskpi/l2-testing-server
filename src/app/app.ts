import express, { NextFunction, Request, Response } from 'express';
import globalErrorHandler from '../errors/globalErrorHandler';

const app = express()
const port = 3000
//  parsers
app.use(express.json());
app.use(express.text());

const userRouter = express.Router();
const courseRouter = express.Router();
app.use("/api/v1/users", userRouter)
app.use("/api/v1/courses", courseRouter)

userRouter.post(
  "/create-user",
  (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);
    res.json({
      success: true,
      message: 'User is created successfully',
      data: user,
    })
  }
);


courseRouter.post(
  "/create-course",
  (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
      success: true,
      message: 'course is created successfully',
      data: course,
    })
  }
);

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("Ata testing error")
  } catch (err) {
    next(err)
  }
})




// error
app.use(globalErrorHandler)
export default app;