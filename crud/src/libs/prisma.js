import { PrismaClient } from "@prisma/client";

const prismaC = new PrismaClient();

// estas funciones salen por la consola de next 

export async function getTasks() {
    try {
        const tasks = await prismaC.task.findMany();
        return tasks;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
}


export async function createTask(data) {
    try {
        const newTask = await prismaC.task.create({
            data: {
                title: data.title,
                description: data.description,
            },
        });
        return newTask;
    } catch (error) {
        console.error("Error creating task:", error);
        throw error;
    }
}

export async function deleteTask(id) {
    try {
        const deletedTask = await prismaC.task.delete({
            where: { id: Number(id) },
        });
        return deletedTask;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
}

export async function updateTask(id, data) {
    try {
        const updatedTask = await prismaC.task.update({
            where: { id: Number(id) },
            data: {
                title: data.title,
                description: data.description,
            },
        });
        return updatedTask;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
}


export const prisma = new PrismaClient();