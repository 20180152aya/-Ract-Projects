import Navn from "../Navbar/Nav";
import Footer from "../Footer/Footer";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button, Form, Container } from "react-bootstrap";

const validSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Email should be email format"),
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  phone: z.string().optional(),
  message: z
    .string()
    .nonempty("Message is required")
    .min(10, "Message should be at least 10 char")
    .max(500, "Message exceeds 500 char"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(validSchema) });

  const onSubmit = () => {
    alert("Message is sent");
    reset();
  };

  return (
    <>
      <Navn />
      <Container className="py-5">
        <h2 className="mb-4">Contact Us</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" {...register("email")} />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" {...register("firstName")} />
            {errors.firstName && (
              <p className="text-danger">{errors.firstName.message}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" {...register("lastName")} />
            {errors.lastName && (
              <p className="text-danger">{errors.lastName.message}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number (Optional)</Form.Label>
            <Form.Control type="text" {...register("phone")} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} {...register("message")} />
            {errors.message && (
              <p className="text-danger">{errors.message.message}</p>
            )}
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Contact;
