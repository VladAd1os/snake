'use strict'
import { assertEquals } from "./testsUtils.js";
import {Direction} from "../direction.js"

export function DTests() {
    return {
        testOppositeFunction: () => {
            let direction = new Direction();

            direction.dir = Direction.S;
            assertEquals(Direction.N, direction.opposite());
            direction.dir = Direction.N;
            assertEquals(Direction.N, direction.opposite());
            direction.dir = Direction.E;
            assertEquals(Direction.W, direction.opposite());
            direction.dir = Direction.W;
            assertEquals(Direction.E, direction.opposite());
        }
    }
}