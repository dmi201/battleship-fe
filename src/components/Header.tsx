"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useUserData } from "@/context/UserContext";

export default function Header() {
  const { userName, isLoggedIn, login, logout, linkedInAccount } =
    useUserData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Battleship</span>
            <Image
              alt="logo"
              src="/assets/logo.jpg"
              width={100}
              height={100}
              className="h-12 m-0 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/how-to-play"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            How to play
          </Link>
          {isLoggedIn && (
            <>
              {" "}
              <Link
                href="/game"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                New game
              </Link>
            </>
          )}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!isLoggedIn ? (
            <button
              onClick={login}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Login <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <>
              {" "}
              <Link href="/user">
                <Image
                  src={"/assets/user.png"}
                  alt="User Profile"
                  width={40}
                  height={40}
                  className="rounded-full mx-2"
                />
              </Link>
              <button
                onClick={logout}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Logout <span aria-hidden="true">&rarr;</span>
              </button>
            </>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Battleship</span>
              <Image
                alt="logo"
                src="/assets/logo.jpg"
                width={100}
                height={100}
                className="h-12 m-0 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/how-to-play"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  How to play
                </Link>
                {isLoggedIn && (
                  <>
                    {" "}
                    <Link
                      href="/game"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      New game
                    </Link>
                  </>
                )}
              </div>
              <div className="py-6">
                {!isLoggedIn ? (
                  <button
                    onClick={login}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Login
                  </button>
                ) : (
                  <>
                    {" "}
                    <Link href="/user">
                      <Image
                        src={"/assets/user.png"}
                        alt="User Profile"
                        width={40}
                        height={40}
                        className="rounded-full my-2"
                      />
                    </Link>
                    <button
                      onClick={logout}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
