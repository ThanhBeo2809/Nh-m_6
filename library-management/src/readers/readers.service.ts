import { Injectable, NotFoundException } from '@nestjs/common';

export type Reader = {
  id: number;
  name: string;
  email?: string;
  phone?: string;
};

@Injectable()
export class ReadersService {
  private readers: Reader[] = [];
  private nextId = 1;

  create(name: string, email?: string, phone?: string) {
    const r: Reader = { id: this.nextId++, name, email, phone };
    this.readers.push(r);
    return r;
  }

  findAll() {
    return this.readers;
  }

  findOne(id: number) {
    const r = this.readers.find(x => x.id === id);
    if (!r) throw new NotFoundException(`Reader with id ${id} not found`);
    return r;
  }

  update(id: number, attrs: Partial<Omit<Reader, 'id'>>) {
    const r = this.readers.find(x => x.id === id);
    if (!r) throw new NotFoundException(`Reader with id ${id} not found`);
    if (attrs.name !== undefined) r.name = attrs.name;
    if (attrs.email !== undefined) r.email = attrs.email;
    if (attrs.phone !== undefined) r.phone = attrs.phone;
    return r;
  }

  remove(id: number) {
    const idx = this.readers.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException(`Reader with id ${id} not found`);
    const [removed] = this.readers.splice(idx, 1);
    return removed;
  }
}
