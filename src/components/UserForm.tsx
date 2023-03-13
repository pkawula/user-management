import { useAddUserMutation, useUpdateUserMutation } from "@/api/users-api";
import { User } from "@/types/api";
import { UserFormType, userValidationSchema } from "@/utils/constants/validate";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./shared/Input";
import { Button } from "./shared/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Alert } from "./shared/Alert";
import Link from "next/link";

const Form = styled.form`
	padding: 20px;
`;

const FormFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 20px 0;
	gap: 10px;
`;

interface UserFormProps {
	user?: User;
}

export default function UserForm({ user }: UserFormProps) {
	const [addUser, addUserResult] = useAddUserMutation();
	const [updateUser, updateUserResult] = useUpdateUserMutation();

	const { push: routerPush } = useRouter();

	const submitForm: SubmitHandler<UserFormType> = async (data: UserFormType) => {
		await (typeof data.id === "string" ? updateUser(data as User) : addUser(data)).unwrap();

		routerPush("/home");
	};

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<UserFormType>({
		resolver: zodResolver(userValidationSchema),
		defaultValues: user,
		mode: "onBlur"
	});

	return (
		<Form onSubmit={handleSubmit(submitForm)}>
			{(addUserResult.error || updateUserResult.error) && (
				<Alert type="danger" style={{ marginBottom: 20 }}>
					{addUserResult.error
						? "Sorry, something went wrong while adding new user. Try again later"
						: "Sorry, something went wrong while updating user. Try again later"}
				</Alert>
			)}
			<Input
				{...register("name")}
				errorMessage={errors?.name?.message || undefined}
				label="Name"
			/>
			<Input
				{...register("username")}
				errorMessage={errors?.username?.message || undefined}
				label="Username"
			/>
			<Input
				{...register("email")}
				errorMessage={errors?.email?.message || undefined}
				label="Email"
			/>
			<Input
				{...register("city")}
				errorMessage={errors?.city?.message || undefined}
				label="City"
			/>
			<FormFooter>
				<Button type="button" mode="outline" variant="danger">
					<Link href="/home">Cancel</Link>
				</Button>
				<Button
					type="submit"
					variant="primary"
					disabled={addUserResult.isLoading || updateUserResult.isLoading}
				>
					{addUserResult.isLoading || updateUserResult.isLoading
						? "Submitting..."
						: "Submit"}
				</Button>
			</FormFooter>
		</Form>
	);
}
